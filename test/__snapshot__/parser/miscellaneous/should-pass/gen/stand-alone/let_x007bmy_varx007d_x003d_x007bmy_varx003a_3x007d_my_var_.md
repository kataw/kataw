# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: stand-alone
> :: case: let {my_var} = {my_var: 3}; my_var;
## Options

`````js
{}
`````
## Input

`````js
let {my_var} = {my_var: 3}; my_var;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "my_var",
                                        "rawText": "my_var",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 12
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "my_var",
                                            "rawText": "my_var",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 16,
                                "end": 25
                            },
                            "flags": 48,
                            "start": 14,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 26
            },
            "flags": 33554448,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "my_var",
                "rawText": "my_var",
                "flags": 96,
                "start": 27,
                "end": 34
            },
            "flags": 16,
            "start": 27,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "let {my_var} = {my_var: 3}; my_var;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

 let {
    my_var
} = { my_var : 3 }; my_var; 
```

### Diagnostics

```javascript
✔ No errors
```

