import OrderTable from "./components/OrderTable";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-1 flex justify-center p-14">
      <div className="w-[799px] bg-white border border-gray-4 p-8">
        <OrderTable />
      </div>
    </div>
  );
};

export default App;
