# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: g
> :: test: as tag
> :: case: x => ok
## Options

`````js
{}
`````
## Input

`````js
x => ok`foo`
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1,
                    "end": 4
                },
                "contents": {
                    "kind": 226,
                    "member": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "start": 4,
                        "end": 7
                    },
                    "template": {
                        "kind": 458761,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 134217824,
                        "start": 7,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "x => ok`foo`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

 x =>; 
```

### Diagnostics

```javascript
✔ No errors
```

