import java.io.*;
import java.net.*;

public class GroceryServer {

    public static void main(String[] args) {

        try {

            ServerSocket serverSocket = new ServerSocket(8080);

            System.out.println("Server started at port 8080");

            while (true) {

                Socket socket = serverSocket.accept();

                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

                out.println("Smart Grocery Budget Planner Backend Running");

                socket.close();
            }

        } catch (Exception e) {

            e.printStackTrace();
        }
    }
}