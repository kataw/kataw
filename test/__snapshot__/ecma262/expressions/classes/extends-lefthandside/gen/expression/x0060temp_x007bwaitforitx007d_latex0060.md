# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/expression
> :: test: expression
> :: case: `temp {waitforit} late`
## Options

`````js
{}
`````
## Input

`````js
(class B extends `temp {waitforit} late` {})
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
                                "kind": 458761,
                                "text": "temp {waitforit} late",
                                "rawText": "temp {waitforit} late",
                                "flags": 134217824,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 40
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 40
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 42
                        },
                        "flags": 8,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 43
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 43
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "(class B extends `temp {waitforit} late` {})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

(class B  extends `temp {waitforit} late` {});
```

### Diagnostics

```javascript
✔ No errors
```

