# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/invalid_obj_rest/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/invalid_obj_rest/gen/case
> :: test: case
> :: case: let {...obj1,...obj2} = foo
## Options

`````js
{}
`````
## Input

`````js
let {...obj1,...obj2} = foo
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
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "obj1",
                                            "rawText": "obj1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 12
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 5,
                                        "end": 12
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "obj2",
                                            "rawText": "obj2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 13,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 20
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 21
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 27
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 27
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 27
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "let {...obj1,...obj2} = foo",
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
✖ A rest element must be last in a destructuring pattern - start: 13, end: 16

```

