# Kataw parser test case

## Input

`````js
const myValue = (callcallcallcallcallcall(87689769876876897698768768976987687689769876):
                 // Comment
                 one | two| thre | jdkxhflksjdhfglkjsdhfglkjhsdkfljghskdjhfgkljshdfgkjhsdkljfhgkljshdfgjdfklgjhklj );
`````

## Options

`````js
{ allowTypes : true }
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
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "myValue",
                            "rawText": "myValue",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 15,
                                "end": 87
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 87
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 87
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 87
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "one",
                            "rawText": "one",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 88,
                            "end": 137
                        },
                        "operatorToken": {
                            "kind": 134251592,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 139
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "two",
                            "rawText": "two",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 139,
                            "end": 143
                        },
                        "flags": 97,
                        "transformFlags": 5120,
                        "start": 88,
                        "end": 143
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 143,
                        "end": 144
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "thre",
                        "rawText": "thre",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 144,
                        "end": 149
                    },
                    "flags": 97,
                    "transformFlags": 5120,
                    "start": 88,
                    "end": 149
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 151
                },
                "right": {
                    "kind": 134299649,
                    "text": "jdkxhflksjdhfglkjsdhfglkjhsdkfljghskdjhfgkljshdfgkjhsdkljfhgkljshdfgjdfklgjhklj",
                    "rawText": "jdkxhflksjdhfglkjsdhfglkjhsdkfljghskdjhfgkljshdfgkjhsdkljfhgkljshdfgjdfklgjhklj",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 151,
                    "end": 231
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 88,
                "end": 231
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 88,
            "end": 231
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 233,
            "end": 234
        }
    ],
    "isModule": false,
    "source": "const myValue = (callcallcallcallcallcall(87689769876876897698768768976987687689769876):\n                 // Comment\n                 one | two| thre | jdkxhflksjdhfglkjsdhfglkjhsdkfljghskdjhfgkljshdfgkjhsdkljfhgkljshdfgjdfklgjhklj );",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 234
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 87, end: 88
✖ Lexical declaration expected - start: 87, end: 88
✖ ')' is not allowed here. Did you mean ';'? - start: 231, end: 233

```

