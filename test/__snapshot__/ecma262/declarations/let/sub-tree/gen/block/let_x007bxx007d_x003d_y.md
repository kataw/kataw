# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/block
> :: test: block
> :: case: let {x} = y
## Options

`````js
{}
`````
## Input

`````js
{ let {x} = y }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 1,
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
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 7,
                                                    "end": 8
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 5,
                                    "end": 13
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 13
                        },
                        "flags": 33554448,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 13
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "{ let {x} = y }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
{
  let { x } = y;
}
```

### Diagnostics

```javascript
✔ No errors
```

