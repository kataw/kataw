# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\position\gen\extends_arg
> :: test: extends arg
> :: case: async x => ok
## Input

`````js
class A extends async x => ok {}
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
                "text": "A",
                "rawText": "A",
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
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 23,
                            "end": 26
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 21,
                            "end": 23
                        },
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 15,
                            "end": 21
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 26,
                            "end": 29
                        },
                        "flags": 288,
                        "start": 15,
                        "end": 29
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 29
                },
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 31,
                    "end": 31
                },
                "flags": 7,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "class A extends async x => ok {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 21, end: 23

```

