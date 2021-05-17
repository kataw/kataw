# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-decl-extends
> :: case: async async(){}
## Input

`````js
class C extends Base { async async(){} }
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Base",
                "rawText": "Base",
                "flags": 96,
                "start": 15,
                "end": 20
            },
            "flags": 16,
            "start": 15,
            "end": 20
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "arrowToken": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 28,
                                "end": 34
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 22,
                                "end": 28
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 288,
                            "start": 22,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 22,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 22,
                "end": 35
            },
            "flags": 16,
            "start": 20,
            "end": 35
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 37,
                "end": 37
            },
            "flags": 16,
            "start": 36,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "class C extends Base { async async(){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Expected a `;` - start: 20, end: 22
✖ Expression expected - start: 35, end: 36
✖ Declaration or statement expected - start: 38, end: 40

```

