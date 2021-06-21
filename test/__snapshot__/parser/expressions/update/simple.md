# Kataw parser test case

## Input

`````js
++a;

a++;
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
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "start": 0,
                    "end": 2
                },
                "operand": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 2,
                    "end": 3
                },
                "flags": 32,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "operand": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 4,
                    "end": 7
                },
                "flags": 32,
                "start": 4,
                "end": 9
            },
            "flags": 16,
            "start": 4,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "++a;\n\na++;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

 ++a; a++; 
```

### Diagnostics

```javascript
✔ No errors
```

