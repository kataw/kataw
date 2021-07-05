# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: new
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (new = x);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "start": 15,
                            "end": 18
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 18,
                            "end": 18
                        },
                        "argumentList": null,
                        "flags": 96,
                        "start": 15,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 0,
                    "start": 15,
                    "end": 22
                },
                "flags": 13,
                "start": 32,
                "end": 23
            },
            "flags": 16,
            "start": 13,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (new = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 18, end: 20
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 18, end: 20

```

