# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
--> HTML Close
[x,,y]
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
                "kind": 198,
                "left": {
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 2
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 0,
                    "end": 2
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 3
                },
                "right": {
                    "kind": 134299649,
                    "text": "HTML",
                    "rawText": "HTML",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 8
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "Close",
                    "rawText": "Close",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 14
                },
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 18
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 16,
                    "end": 20
                },
                "flags": 32,
                "transformFlags": 4,
                "start": 8,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "--> HTML Close\n[x,,y]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 2, end: 3
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 2, end: 3
✖ '; ' is not allowed here. Did you mean ';'? - start: 8, end: 14
✖ Identifier expected - start: 18, end: 19

```

