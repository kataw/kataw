# Kataw parser test case

## Input

`````js
a--

/*2*/

;
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
                "kind": 127,
                "operandToken": {
                    "kind": 196636,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "operand": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "flags": 32,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "a--\n\n/*2*/\n\n;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

 a--; 
```

### Diagnostics

```javascript
✔ No errors
```

