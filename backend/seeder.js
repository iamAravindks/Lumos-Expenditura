import colors from 'colors'
import connectDB from "./config/db";
import transactions from "./data/transactions";
import users from "./data/users";
import Transactions from "./models/transactionsModel";
import User from "./models/userModel";

const importData = async () => {
    try
    {
      await connectDB()
    await Transactions.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const sampleTransactions = createdUsers.map((user) => {
      return { user, transactions:[...transactions] };
    });
    await Transactions.insertMany(sampleTransactions);
    console.log("Data imported".green.inverse);
    process.exit();
  } catch (error)
  {
              console.log(`Error on importing ${error.message}`.red.inverse);
              process.exit(1);
  }
};

const destroyData = async () => {
    try
    {
       await connectDB();
        await Transactions.deleteMany();
        await User.deleteMany();
    console.log("Data destroyed".yellow.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error on importing ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") destroyData();
else importData();
