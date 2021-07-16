# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/array_with_assign_to_paren-wrapped
> :: test: array with assign to paren-wrapped
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
async x => (in) = 1
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
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "operatorToken": {
                                "kind": 21006388,
                                "flags": 96,
                                "transformFlags": 8192,
                                "start": 12,
                                "end": 14
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 10,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 10,
                    "end": 19
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "async x => (in) = 1",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 14
✖ Identifier expected - start: 14, end: 15

```

