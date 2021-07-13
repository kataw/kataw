# Kataw parser test case

## Input

`````js
/* detached comment */
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [],
    "isModule": false,
    "source": "/* detached comment */",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
/* detached comment */ /* detached comment */ 
```

### Diagnostics

```javascript
✔ No errors
```

