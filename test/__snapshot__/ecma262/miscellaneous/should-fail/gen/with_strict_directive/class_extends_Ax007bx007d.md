# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: class extends A{}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; class extends A{}
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
            "rawText": "\"use strict\"",
            "flags": 96,
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
                "start": 13,
                "end": 19
            },
            "name": null,
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 19,
                        "end": 27
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "start": 27,
                        "end": 29
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 27,
                    "end": 29
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 30,
                    "end": 30
                },
                "flags": 19,
                "start": 32,
                "end": 31
            },
            "flags": 16,
            "start": 13,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; class extends A{}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

'"use strict"';
class  extends A {
}

```

### Diagnostics

```javascript
✔ No errors
```

