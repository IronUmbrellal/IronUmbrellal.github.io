from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler

async def start(update, context):
    keyboard = [
        [InlineKeyboardButton("Open Web App", web_app={"url": "https://your-web-app-url.comhttps://ironumbrellal.github.io/"})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Click the button below to open the Web App:", reply_markup=reply_markup)

# Set up the bot
app = ApplicationBuilder().token("7928423326:AAHsHR_lPY6kCMTTA7vNNwguYNnqv9EripIBOT_TOKEN").build()

# Add handler for the /start command
app.add_handler(CommandHandler("start", start))

# Start the bot
app.run_polling()