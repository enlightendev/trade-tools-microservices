package io.enlightendev.watchlists;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
public class WatchlistsApplication implements CommandLineRunner {

	private static List<WatchList> watchLists = new ArrayList<WatchList>();

	public static void main(String[] args) {
		SpringApplication.run(WatchlistsApplication.class, args);
	}

	/**
	 * Callback used to run the bean.
	 *
	 * @param args incoming main method arguments
	 * @throws Exception on error
	 */
	@Override
	public void run(String... args) throws Exception {

		watchLists.add(new WatchList("tech-stocks", "1", "stocks"));
		watchLists.add(new WatchList("indexes", "1", "futures"));

	}

	@RequestMapping("/api/watchlist")
	public List<WatchList>getWatchLists(){
		return watchLists;
	}

}


class WatchList {

	private String name;

	private String id;

	private String type;

	public WatchList(String name, String id, String type) {
		this.name = name;
		this.id = id;
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
