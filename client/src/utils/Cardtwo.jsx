import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Cardtwo = () => {
  let navigate = useNavigate();

  function paymentHandler(e) {
    let obj = {
      amount: 10000,
      currency: "INR",
      receipt: "qwsaq1",
    };
    axios
      .post("http://localhost:3000/order", obj)
      .then((res) => {
        var options = {
          key: "rzp_test_i6kJlpxdFLeWaE",
          amount: obj.amount,
          currency: obj.currency,
          name: "Trip Tales",
          description: "Test Transaction",
          image: "/logo.svg",
          order_id: res.data.id,
          handler: function (response) {
            toast.success("Payment Success");
            toast.success("PaymentID" + " " + response.razorpay_payment_id);
            navigate("/");
          },
          prefill: {
            name: "Vikram Kumar Choudhary",
            email: "vikram0104irctc@gmail.com",
            contact: "9988776644",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
      })
      .catch(() => {
        toast.error("Error sending payment");
      });
  }

  return (
    <div>
      <Card className="w-[300px] overflow-hidden bg-white rounded-3xl shadow-xl">
        <CardHeader className="p-0">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-bl-full opacity-50"></div>
            <div className="relative z-10">
              <div className="text-lg font-bold mb-1">ADVANCE</div>
              <div className="text-center">
                <span className="text-4xl font-bold">💰100</span>
                <span className="text-sm">/mon</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <FeatureItem
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="Budget Planning Tools"
          />
          <FeatureItem
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="Finance Analyzing"
          />
          <FeatureItem
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="24 hour support"
            inactive
          />
          <FeatureItem
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="Customer Managemet"
            inactive
          />
          <FeatureItem
            icon={<Check className="h-5 w-5 text-green-500" />}
            text="Expense Tracking"
            inactive
          />
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-600 hover:to-violet-600 rounded-full py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={paymentHandler}
          >
            BUY NOW
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cardtwo;

function FeatureItem({ icon, text, inactive }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span
        className={`text-sm ${inactive ? "text-gray-400" : "text-gray-700"}`}
      >
        {text}
      </span>
    </div>
  );
}
