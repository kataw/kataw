# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: stand-alone
> :: case: async function foo() {};
## Options

`````js
{}
`````
## Input

`````js
async function foo() {};
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 22,
                    "end": 22
                },
                "flags": 32,
                "start": 20,
                "end": 23
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 23
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 23,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "async function foo() {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

 async function foo() {
}, ; 
```

### Diagnostics

```javascript
✔ No errors
```

