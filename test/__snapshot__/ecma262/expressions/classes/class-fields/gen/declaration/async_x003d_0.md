# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/gen/declaration
> :: test: declaration
> :: case: async = 0
## Options

`````js
{}
`````
## Input

`````js
class C { async = 0 }
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
                "text": "C",
                "rawText": "C",
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
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 19
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "class C { async = 0 }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
class C {
  async = 0;
}
```

### Diagnostics

```javascript
✔ No errors
```

