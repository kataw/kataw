# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: super.foo
## Input

`````js
class A extends super.foo {}
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
                "text": "A",
                "rawText": "A",
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
                "kind": 129,
                "member": {
                    "kind": 225,
                    "superKeyword": {
                        "kind": 4259935,
                        "flags": 0,
                        "start": 15,
                        "end": 21
                    },
                    "flags": 96,
                    "start": 15,
                    "end": 21
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 22,
                    "end": 25
                },
                "flags": 536870944,
                "start": 15,
                "end": 25
            },
            "flags": 16,
            "start": 15,
            "end": 25
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 27,
                "end": 27
            },
            "flags": 16,
            "start": 25,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "class A extends super.foo {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 21, end: 22
✖ Expected a `;` - start: 25, end: 27

```

