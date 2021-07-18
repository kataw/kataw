# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/expression
> :: test: expression
> :: case: async a => b
## Options

`````js
{}
`````
## Input

`````js
(class B extends async a => b {})
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 16
                            },
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 24
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 27
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 29
                                },
                                "flags": 288,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 29
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 29
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 31
                        },
                        "flags": 8,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 32
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 32
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "(class B extends async a => b {})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ';' expected - start: 22, end: 24

```

