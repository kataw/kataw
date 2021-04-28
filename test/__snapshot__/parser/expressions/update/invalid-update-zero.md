# Kataw parser test case

## Input

`````js
0++;

0--;

++0;

--0;
`````

## Output

### Hybrid CST

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
                    "kind": 196635,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "flags": 256,
                "start": 0,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196636,
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 769,
                    "start": 4,
                    "end": 7
                },
                "flags": 256,
                "start": 4,
                "end": 9
            },
            "flags": 128,
            "start": 4,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 768,
                    "start": 10,
                    "end": 14
                },
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 14,
                    "end": 15
                },
                "flags": 256,
                "start": 10,
                "end": 15
            },
            "flags": 128,
            "start": 10,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 768,
                    "start": 16,
                    "end": 20
                },
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 20,
                    "end": 21
                },
                "flags": 256,
                "start": 16,
                "end": 21
            },
            "flags": 128,
            "start": 16,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "0++;\n\n0--;\n\n++0;\n\n--0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 1, end: 3
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 7, end: 9
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 15, end: 16
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 21, end: 22

```

