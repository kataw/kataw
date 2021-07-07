# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/special_keys/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/special_keys/gen/as_regular_property_in_class
> :: test: as regular property in class
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
class x {function: x}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "function",
                                "rawText": "function",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 17
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 17
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 17
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "class x {function: x}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 17, end: 18
✖ Declaration or statement expected - start: 20, end: 21

```

