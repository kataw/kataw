# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: n
> :: test: declaration
> :: case: `temp {waitforit} late`
## Options

`````js
{}
`````
## Input

`````js
class A extends `temp {waitforit} late` {}
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
                        "kind": 458761,
                        "text": "temp {waitforit} late",
                        "rawText": "temp {waitforit} late",
                        "flags": 134217824,
                        "start": 15,
                        "end": 39
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 39
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 41,
                    "end": 41
                },
                "flags": 7,
                "start": 32,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "class A extends `temp {waitforit} late` {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

 class A {
} 
```

### Diagnostics

```javascript
✔ No errors
```

