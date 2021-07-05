# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/for-in_lhs
> :: test: for-in lhs
> :: case: async
>          x => y
## Options

`````js
{}
`````
## Input

`````js
for (async
x => y in x) ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 5,
                "end": 10
            },
            "condition": null,
            "incrementor": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 10,
                    "end": 12
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 12,
                    "end": 15
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 17,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 96,
                    "start": 15,
                    "end": 22
                },
                "flags": 32,
                "start": 10,
                "end": 22
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 23,
                "end": 25
            },
            "flags": 80,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "for (async\nx => y in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

for (async; ; x =>  y in  x);
```

### Diagnostics

```javascript
✔ No errors
```

