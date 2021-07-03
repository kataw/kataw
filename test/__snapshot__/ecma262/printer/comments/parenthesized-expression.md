# Kataw parser test case

## Input

`````js
a(/*1*/);
a(
    /*first*/
    // foo
    /*middle*/
    // bar
    /*last*/
);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 2
                },
                "flags": 268435488,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 9,
                    "end": 11
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 12,
                    "end": 12
                },
                "flags": 268435488,
                "start": 9,
                "end": 78
            },
            "flags": 16,
            "start": 9,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "a(/*1*/);\na(\n    /*first*/\n    // foo\n    /*middle*/\n    // bar\n    /*last*/\n);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

a(/*1*/);
a(
 /*first*/
// foo
/*middle*/
// bar
/*last*/
);

```

### Diagnostics

```javascript
✔ No errors
```

