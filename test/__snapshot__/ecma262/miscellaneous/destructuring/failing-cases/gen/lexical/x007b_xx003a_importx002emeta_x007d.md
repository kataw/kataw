# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/gen/lexical
> :: test: lexical
> :: case: { x: import.meta }
## Options

`````js
{}
`````
## Input

`````js
let { x: import.meta }
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
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "value": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 8
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 8
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "import",
                                            "rawText": "import",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 15
                                        },
                                        "value": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 15
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 15
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 15
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 15
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 15
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "meta",
                "rawText": "meta",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 16,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "let { x: import.meta }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Object literal keys that are strings or numbers must be a method or have a colon - start: 8, end: 15
✖ ',' expected - start: 8, end: 15
✖ Object literal keys that are strings or numbers must be a method or have a colon - start: 15, end: 16
✖ ',' expected - start: 15, end: 16
✖ Missing initializer in destructuring declaration - start: 15, end: 16
✖ Lexical declaration expected - start: 15, end: 16
✖ Declaration or statement expected - start: 20, end: 22

```

