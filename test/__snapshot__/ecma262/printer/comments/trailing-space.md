# Kataw parser test case

## Input

`````js
#!/there/is-space-here->

// Do not trim trailing whitespace from this source file!

// There is some space here ->
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [],
    "isModule": false,
    "source": "#!/there/is-space-here->\n\n// Do not trim trailing whitespace from this source file!\n\n// There is some space here ->",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 115
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✔ No errors
```

