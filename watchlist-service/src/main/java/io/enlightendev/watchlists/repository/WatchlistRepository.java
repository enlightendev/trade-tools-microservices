package io.enlightendev.watchlists.repository;

import io.enlightendev.watchlists.model.Watchlist;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 */
@RepositoryRestResource(collectionResourceRel = "watchlist", path = "watchlist")
public interface WatchlistRepository extends MongoRepository<Watchlist, String> {

}
