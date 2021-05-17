# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: fooo.bar
## Input

`````js
function *P(){
  class D extends fooo.bar {}
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "P",
                "rawText": "P",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 1,
                                "start": 14,
                                "end": 22
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "D",
                                "rawText": "D",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "members": {
                                "kind": 277,
                                "classHeritage": null,
                                "elements": [],
                                "flags": 32,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 24
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 24
                },
                "flags": 32,
                "start": 13,
                "end": 24
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "fooo",
                    "rawText": "fooo",
                    "flags": 96,
                    "start": 32,
                    "end": 37
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 38,
                    "end": 41
                },
                "flags": 536870944,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "start": 32,
            "end": 41
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 43,
                "end": 43
            },
            "flags": 16,
            "start": 41,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function *P(){\n  class D extends fooo.bar {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 24, end: 32
✖ Expected a `;` - start: 41, end: 43
✖ Declaration or statement expected - start: 44, end: 46

```

