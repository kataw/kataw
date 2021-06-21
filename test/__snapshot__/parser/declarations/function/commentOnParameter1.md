# Kataw parser test case

## Input

`````js
function commentedParameters(
/* Parameter a */
a
/* End of parameter a */
/* Parameter b */
,
b
/* End of parameter b */
){}
`````

## Options

### Parser Options

`````js
{allowTypes: true}
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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "commentedParameters",
                "rawText": "commentedParameters",
                "flags": 96,
                "start": 8,
                "end": 28
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 29,
                        "end": 49
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 94,
                        "end": 96
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 28,
                "end": 123
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 124,
                    "end": 124
                },
                "flags": 32,
                "start": 123,
                "end": 125
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 125
        }
    ],
    "isModule": false,
    "source": "function commentedParameters(\n/* Parameter a */\na\n/* End of parameter a */\n/* Parameter b */\n,\nb\n/* End of parameter b */\n){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 125
}
```

### Printed

```javascript

 function commentedParameters(a
     /* End of parameter a */
    /* Parameter b */
    , b) {
} 
```

### Diagnostics

```javascript
✔ No errors
```

