# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: as class name
> :: case: switch
## Input

`````js
class switch {}
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
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 5,
                "end": 5
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 5,
                "end": 12
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 14,
                    "end": 14
                },
                "flags": 32,
                "start": 12,
                "end": 15
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 15,
                "end": 15
            },
            "flags": 16,
            "start": 5,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "class switch {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

class {}
switch({}
 
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 12
✖ Expected a ')' to match the '(' token here - start: 15, end: 15

```

