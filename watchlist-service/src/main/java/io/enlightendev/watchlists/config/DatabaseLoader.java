package io.enlightendev.watchlists.config;

import io.enlightendev.watchlists.model.Watchlist;
import io.enlightendev.watchlists.repository.WatchlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    @Autowired
    WatchlistRepository watchlistRepository;

    /**
     * Callback used to run the bean.
     *
     * @param args incoming main method arguments
     * @throws Exception on error
     */
    @Override
    public void run(String... args) throws Exception {

        watchlistRepository.deleteAll();

        watchlistRepository.save(new Watchlist("gold-futures", "futures"));
        watchlistRepository.save(new Watchlist("gold-etfs", "etf"));

    }
}
