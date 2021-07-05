# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: const {a: b = my_var} = {}
## Options

`````js
{}
`````
## Input

`````js
const {a: b = my_var} = {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "my_var",
                                            "rawText": "my_var",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 21
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 48,
                            "start": 23,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 26
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 26
            },
            "flags": 33554448,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "const {a: b = my_var} = {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

const {a: b = my_var} = {};
```

### Diagnostics

```javascript
✔ No errors
```

