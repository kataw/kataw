# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: class C extends yield { }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; class C extends yield { }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 21
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
                        "start": 21,
                        "end": 29
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 35
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 35
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 37
                },
                "flags": 21,
                "transformFlags": 0,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "'use strict'; class C extends yield { }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

"'use strict'";
class C extends yield {}
```

### Diagnostics

```javascript
✔ No errors
```

