# Kataw parser test case

## Input

`````js
0++;

0--;

++0;

--0;
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
                    "kind": 196635,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "operand": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
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
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196636,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "operand": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 97,
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
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 65,
                    "start": 10,
                    "end": 14
                },
                "operand": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "flags": 32,
                "start": 10,
                "end": 15
            },
            "flags": 16,
            "start": 10,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 65,
                    "start": 16,
                    "end": 20
                },
                "operand": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 20,
                    "end": 21
                },
                "flags": 32,
                "start": 16,
                "end": 21
            },
            "flags": 16,
            "start": 16,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "0++;\n\n0--;\n\n++0;\n\n--0;",
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

