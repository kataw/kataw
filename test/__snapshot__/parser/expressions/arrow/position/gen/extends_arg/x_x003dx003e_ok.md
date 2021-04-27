# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: x => ok
## Input

`````js
class A extends x => ok {}
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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 17,
                        "end": 20
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 15,
                        "end": 17
                    },
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 768,
                        "start": 20,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 23
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 23
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 25,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "class A extends x => ok {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

