# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/classes/special_keys/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\special_keys\gen\as_super_class_name
> :: test: as super class name
> :: case: try
## Input

`````js
class x extends try {}
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 15,
                        "end": 15
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 15
                },
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 7,
                    "end": 7
                },
                "flags": 7,
                "start": 32,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 15,
                "end": 19
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "start": 19,
                "end": 22
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 22,
                    "end": 22
                },
                "flags": 16,
                "start": 22,
                "end": 22
            },
            "flags": 16,
            "start": 15,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "class x extends try {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 19
✖ Declaration or statement expected - start: 22, end: 22

```

