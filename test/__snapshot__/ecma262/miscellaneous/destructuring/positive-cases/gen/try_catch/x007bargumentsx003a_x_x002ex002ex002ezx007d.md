# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/try_catch
> :: test: try catch
> :: case: {arguments: x, ...z}
## Options

`````js
{}
`````
## Input

`````js
try {} catch({arguments: x, ...z}) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 329,
                                "key": {
                                    "kind": 134299649,
                                    "text": "arguments",
                                    "rawText": "arguments",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 23
                                },
                                "value": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 26
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 14,
                                "end": 26
                            },
                            {
                                "kind": 281,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 31
                                },
                                "left": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 32
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": null,
                                "flags": 0,
                                "start": 27,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 14,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 33
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 16,
                    "start": 34,
                    "end": 37
                },
                "flags": 80,
                "start": 6,
                "end": 37
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "try {} catch({arguments: x, ...z}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

try { }
catch ({
  arguments: x,
  ...z
}){ }

```

### Diagnostics

```javascript
✔ No errors
```

