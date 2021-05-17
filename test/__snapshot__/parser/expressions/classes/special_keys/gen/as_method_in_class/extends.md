# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as method in class
> :: case: extends
## Input

`````js
class x {extends(){}}
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
                "flags": 0,
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
            "members": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 0,
                        "start": 9,
                        "end": 16
                    },
                    "expression": {
                        "kind": 271,
                        "arrowToken": null,
                        "typeParameters": null,
                        "parameters": [],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 19,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 16,
                        "end": 19
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 16,
                    "end": 19
                },
                "elements": [],
                "flags": 32,
                "start": 9,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "class x {extends(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 18, end: 19
✖ Expression expected - start: 19, end: 20
✖ Declaration or statement expected - start: 20, end: 21

```

