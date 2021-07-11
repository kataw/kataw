# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: catch
## Options

`````js
{}
`````
## Input

`````js
async (x = (catch) = f) => {}
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
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 12,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 0,
                    "end": 0
                },
                "flags": 268435490,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 12,
                    "end": 12
                },
                "flags": 16,
                "start": 12,
                "end": 12
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 12,
                    "end": 17
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 16,
                    "start": 17,
                    "end": 17
                },
                "flags": 80,
                "start": 12,
                "end": 17
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 12,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 20,
                "end": 22
            },
            "flags": 16,
            "start": 20,
            "end": 22
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 28,
                "end": 28
            },
            "flags": 16,
            "start": 26,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async (x = (catch) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 17
✖ 'try' expected - start: 12, end: 17
✖ Declaration or statement expected - start: 17, end: 18
✖ Declaration or statement expected - start: 18, end: 20
✖ Expected a `;` - start: 22, end: 23
✖ Declaration or statement expected - start: 23, end: 26

```

