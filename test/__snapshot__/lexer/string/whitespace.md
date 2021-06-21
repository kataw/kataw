# Kataw parser test case

## Input

`````js
"\u0009str\u0009ing\u0009"
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\tstr\ting\t",
                "rawText": "\"\\u0009str\\u0009ing\\u0009\"",
                "flags": 16480,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "\"\\u0009str\\u0009ing\\u0009\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

 "\u0009str\u0009ing\u0009"; 
```

### Diagnostics

```javascript
✔ No errors
```

