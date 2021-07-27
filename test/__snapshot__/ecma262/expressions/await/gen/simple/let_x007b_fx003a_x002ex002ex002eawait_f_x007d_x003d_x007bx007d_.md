# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/simple
> :: test: simple
> :: case: let { f: ...await f } = {};
## Options

`````js
{}
`````
## Input

`````js
let { f: ...await f } = {};
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
                                            "text": "f",
                                            "rawText": "f",
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
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 12
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 8,
                                        "end": 17
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 19
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
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
                                "transformFlags": 0,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 23,
                            "end": 26
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 26
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "let { f: ...await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Object literal keys that are strings or numbers must be a method or have a colon - start: 8, end: 12
✖ ',' expected - start: 8, end: 12
✖ ',' expected - start: 17, end: 19

```

