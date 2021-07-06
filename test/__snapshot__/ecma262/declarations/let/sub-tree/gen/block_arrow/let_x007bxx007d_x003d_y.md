# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/block_arrow
> :: test: block arrow
> :: case: let {x} = y
## Options

`````js
{}
`````
## Input

`````js
() => { let {x} = y }
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 5
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 11
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
                                                            "start": 13,
                                                            "end": 14
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 14
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 15
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 19
                                            },
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 11,
                                            "end": 19
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 19
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 19
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 21
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "() => { let {x} = y }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

() => {
  let {x} = y;
};
```

### Diagnostics

```javascript
✔ No errors
```

