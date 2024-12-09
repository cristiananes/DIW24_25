package com.cristianag47.pruebas.cines;

import java.util.ArrayList;
import java.util.List;

import com.cristianag47.pruebas.peliculas.Pelicula;

public class Cine {
	private String id;
	private String nombre;
	private String ciudad;
	private int capacidad;
	private List<Pelicula> peliculas = new ArrayList<Pelicula>();
	public void addPelicula (Pelicula p) {
		if (!peliculas.contains(p)) {
			peliculas.add(p);
		}
	}
	
	
	public Cine() {}
	
	//este es el constructor que necesito para el bean y al hacer este hay que poner el vacio porque al tener uno ya no crea el vacio por defecto.
	public Cine(String id, String nombre, String localidad, int capacidad) {
		// TODO Auto-generated constructor stub
		setId(id);
		setCapacidad(capacidad);
		setNombre(nombre);
		setCiudad(localidad);
	}
	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}
	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	/**
	 * @return the ciudad
	 */
	public String getCiudad() {
		return ciudad;
	}
	/**
	 * @param ciudad the ciudad to set
	 */
	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	/**
	 * @return the capacidad
	 */
	public int getCapacidad() {
		return capacidad;
	}
	/**
	 * @param capacidad the capacidad to set
	 */
	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}
	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "Cine [id=" + id + ", nombre=" + nombre + ", ciudad=" + ciudad + ", capacidad=" + capacidad + "]";
	}

	
	

}
