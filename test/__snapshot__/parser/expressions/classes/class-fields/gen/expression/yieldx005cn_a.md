# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: yield\n a
## Input

`````js
class C extends Base { yield\n a }
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 7,
                    "start": 0,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Base",
                    "rawText": "Base",
                    "flags": 768,
                    "start": 15,
                    "end": 20
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 20
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 768,
                            "start": 22,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 22,
                        "end": 28
                    }
                ],
                "flags": 256,
                "start": 22,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 29,
                "end": 30
            },
            "flags": 128,
            "start": 29,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 30,
                "end": 32
            },
            "flags": 128,
            "start": 30,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "class C extends Base { yield\\n a }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 22, end: 28
✖ Invalid hexadecimal escape sequence - start: 28, end: 28
✖ Statement expected - start: 28, end: 29
✖ Statement expected - start: 32, end: 34

```

