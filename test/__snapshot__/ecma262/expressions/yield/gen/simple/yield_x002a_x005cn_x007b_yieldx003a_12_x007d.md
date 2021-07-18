# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/simple
> :: test: simple
> :: case: yield * \n { yield: 12 }
## Options

`````js
{}
`````
## Input

`````js
yield * \n { yield: 12 }
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
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 7
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 10
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 18
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 12,
                                "rawText": "12",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 22
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 22
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "yield * \\n { yield: 12 }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 7, end: 8
✖ Identifier expected - start: 7, end: 9
✖ '{' is not allowed here. Did you mean ';'? - start: 10, end: 12

```

