while-statement6# Kataw parser test case

## Input

`````js
 /*1*/



 ;




 /*2*/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": " /*1*/\n\n\n\n ;\n\n\n\n\n /*2*/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
/*1*/

```

### Diagnostics

```javascript
✔ No errors
```

