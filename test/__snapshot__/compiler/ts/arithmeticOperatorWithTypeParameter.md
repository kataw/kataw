# Kataw parser test case

## Input

`````js
function foo<T>(t: T) {
    var a: any;
    var b: boolean;
    var c: number;
    var d: string;
    var e: {};

    var r1a1 = a * t;
    var r1a2 = a / t;
    var r1a3 = a % t;
    var r1a4 = a - t;
    var r1a5 = a << t;
    var r1a6 = a >> t;
    var r1a7 = a >>> t;
    var r1a8 = a & t;
    var r1a9 = a ^ t;
    var r1a10 = a | t;

    var r2a1 = t * a;
    var r2a2 = t / a;
    var r2a3 = t % a;
    var r2a4 = t - a;
    var r2a5 = t << a;
    var r2a6 = t >> a;
    var r2a7 = t >>> a;
    var r2a8 = t & a;
    var r2a9 = t ^ a;
    var r2a10 = t | a;

    var r1b1 = b * t;
    var r1b2 = b / t;
    var r1b3 = b % t;
    var r1b4 = b - t;
    var r1b5 = b << t;
    var r1b6 = b >> t;
    var r1b7 = b >>> t;
    var r1b8 = b & t;
    var r1b9 = b ^ t;
    var r1b10 = b | t;

    var r2b1 = t * b;
    var r2b2 = t / b;
    var r2b3 = t % b;
    var r2b4 = t - b;
    var r2b5 = t << b;
    var r2b6 = t >> b;
    var r2b7 = t >>> b;
    var r2b8 = t & b;
    var r2b9 = t ^ b;
    var r2b10 = t | b;

    var r1c1 = c * t;
    var r1c2 = c / t;
    var r1c3 = c % t;
    var r1c4 = c - t;
    var r1c5 = c << t;
    var r1c6 = c >> t;
    var r1c7 = c >>> t;
    var r1c8 = c & t;
    var r1c9 = c ^ t;
    var r1c10 = c | t;

    var r2c1 = t * c;
    var r2c2 = t / c;
    var r2c3 = t % c;
    var r2c4 = t - c;
    var r2c5 = t << c;
    var r2c6 = t >> c;
    var r2c7 = t >>> c;
    var r2c8 = t & c;
    var r2c9 = t ^ c;
    var r2c10 = t | c;

    var r1d1 = d * t;
    var r1d2 = d / t;
    var r1d3 = d % t;
    var r1d4 = d - t;
    var r1d5 = d << t;
    var r1d6 = d >> t;
    var r1d7 = d >>> t;
    var r1d8 = d & t;
    var r1d9 = d ^ t;
    var r1d10 = d | t;

    var r2d1 = t * d;
    var r2d2 = t / d;
    var r2d3 = t % d;
    var r2d4 = t - d;
    var r2d5 = t << d;
    var r2d6 = t >> d;
    var r2d7 = t >>> d;
    var r2d8 = t & d;
    var r2d9 = t ^ d;
    var r2d10 = t | d;

    var r1e1 = e * t;
    var r1e2 = e / t;
    var r1e3 = e % t;
    var r1e4 = e - t;
    var r1e5 = e << t;
    var r1e6 = e >> t;
    var r1e7 = e >>> t;
    var r1e8 = e & t;
    var r1e9 = e ^ t;
    var r1e10 = e | t;

    var r2e1 = t * e;
    var r2e2 = t / e;
    var r2e3 = t % e;
    var r2e4 = t - e;
    var r2e5 = t << e;
    var r2e6 = t >> e;
    var r2e7 = t >>> e;
    var r2e8 = t & e;
    var r2e9 = t ^ e;
    var r2e10 = t | e;

    var r1f1 = t * t;
    var r1f2 = t / t;
    var r1f3 = t % t;
    var r1f4 = t - t;
    var r1f5 = t << t;
    var r1f6 = t >> t;
    var r1f7 = t >>> t;
    var r1f8 = t & t;
    var r1f9 = t ^ t;
    var r1f10 = t | t;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function foo<T>(t: T) {\n    var a: any;\n    var b: boolean;\n    var c: number;\n    var d: string;\n    var e: {};\n\n    var r1a1 = a * t;\n    var r1a2 = a / t;\n    var r1a3 = a % t;\n    var r1a4 = a - t;\n    var r1a5 = a << t;\n    var r1a6 = a >> t;\n    var r1a7 = a >>> t;\n    var r1a8 = a & t;\n    var r1a9 = a ^ t;\n    var r1a10 = a | t;\n\n    var r2a1 = t * a;\n    var r2a2 = t / a;\n    var r2a3 = t % a;\n    var r2a4 = t - a;\n    var r2a5 = t << a;\n    var r2a6 = t >> a;\n    var r2a7 = t >>> a;\n    var r2a8 = t & a;\n    var r2a9 = t ^ a;\n    var r2a10 = t | a;\n\n    var r1b1 = b * t;\n    var r1b2 = b / t;\n    var r1b3 = b % t;\n    var r1b4 = b - t;\n    var r1b5 = b << t;\n    var r1b6 = b >> t;\n    var r1b7 = b >>> t;\n    var r1b8 = b & t;\n    var r1b9 = b ^ t;\n    var r1b10 = b | t;\n\n    var r2b1 = t * b;\n    var r2b2 = t / b;\n    var r2b3 = t % b;\n    var r2b4 = t - b;\n    var r2b5 = t << b;\n    var r2b6 = t >> b;\n    var r2b7 = t >>> b;\n    var r2b8 = t & b;\n    var r2b9 = t ^ b;\n    var r2b10 = t | b;\n\n    var r1c1 = c * t;\n    var r1c2 = c / t;\n    var r1c3 = c % t;\n    var r1c4 = c - t;\n    var r1c5 = c << t;\n    var r1c6 = c >> t;\n    var r1c7 = c >>> t;\n    var r1c8 = c & t;\n    var r1c9 = c ^ t;\n    var r1c10 = c | t;\n\n    var r2c1 = t * c;\n    var r2c2 = t / c;\n    var r2c3 = t % c;\n    var r2c4 = t - c;\n    var r2c5 = t << c;\n    var r2c6 = t >> c;\n    var r2c7 = t >>> c;\n    var r2c8 = t & c;\n    var r2c9 = t ^ c;\n    var r2c10 = t | c;\n\n    var r1d1 = d * t;\n    var r1d2 = d / t;\n    var r1d3 = d % t;\n    var r1d4 = d - t;\n    var r1d5 = d << t;\n    var r1d6 = d >> t;\n    var r1d7 = d >>> t;\n    var r1d8 = d & t;\n    var r1d9 = d ^ t;\n    var r1d10 = d | t;\n\n    var r2d1 = t * d;\n    var r2d2 = t / d;\n    var r2d3 = t % d;\n    var r2d4 = t - d;\n    var r2d5 = t << d;\n    var r2d6 = t >> d;\n    var r2d7 = t >>> d;\n    var r2d8 = t & d;\n    var r2d9 = t ^ d;\n    var r2d10 = t | d;\n\n    var r1e1 = e * t;\n    var r1e2 = e / t;\n    var r1e3 = e % t;\n    var r1e4 = e - t;\n    var r1e5 = e << t;\n    var r1e6 = e >> t;\n    var r1e7 = e >>> t;\n    var r1e8 = e & t;\n    var r1e9 = e ^ t;\n    var r1e10 = e | t;\n\n    var r2e1 = t * e;\n    var r2e2 = t / e;\n    var r2e3 = t % e;\n    var r2e4 = t - e;\n    var r2e5 = t << e;\n    var r2e6 = t >> e;\n    var r2e7 = t >>> e;\n    var r2e8 = t & e;\n    var r2e9 = t ^ e;\n    var r2e10 = t | e;\n\n    var r1f1 = t * t;\n    var r1f2 = t / t;\n    var r1f3 = t % t;\n    var r1f4 = t - t;\n    var r1f5 = t << t;\n    var r1f6 = t >> t;\n    var r1f7 = t >>> t;\n    var r1f8 = t & t;\n    var r1f9 = t ^ t;\n    var r1f10 = t | t;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 16,
                            "end": 17
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 18,
                            "end": 21
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 16,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 21
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "exclamation": false,
                                        "type": {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 34,
                                            "end": 38
                                        },
                                        "initializer": null,
                                        "flags": 31,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 38
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 38
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 39
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 47,
                                            "end": 49
                                        },
                                        "exclamation": false,
                                        "type": {
                                            "kind": 4268070,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 50,
                                            "end": 58
                                        },
                                        "initializer": null,
                                        "flags": 47,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 58
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 58
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 59
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 67,
                                            "end": 69
                                        },
                                        "exclamation": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 70,
                                            "end": 77
                                        },
                                        "initializer": null,
                                        "flags": 67,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 77
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 77
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 78
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 86,
                                            "end": 88
                                        },
                                        "exclamation": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 89,
                                            "end": 96
                                        },
                                        "initializer": null,
                                        "flags": 86,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 96
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 96
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 78,
                            "end": 97
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 105,
                                            "end": 107
                                        },
                                        "exclamation": false,
                                        "type": {
                                            "kind": 536879334,
                                            "objectTypeMembers": {
                                                "kind": 536871081,
                                                "members": [],
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 110,
                                                "end": 111
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 108,
                                            "end": 111
                                        },
                                        "initializer": null,
                                        "flags": 105,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 111
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 111
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 97,
                            "end": 112
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a1",
                                            "rawText": "r1a1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 121,
                                            "end": 126
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 128,
                                                "end": 130
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 132,
                                                "end": 134
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 128,
                                            "end": 134
                                        },
                                        "flags": 121,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 134
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 121,
                                "end": 134
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 135
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a2",
                                            "rawText": "r1a2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 143,
                                            "end": 148
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 150,
                                                "end": 152
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 154,
                                                "end": 156
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 150,
                                            "end": 156
                                        },
                                        "flags": 143,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 156
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 156
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 135,
                            "end": 157
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a3",
                                            "rawText": "r1a3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 165,
                                            "end": 170
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 172,
                                                "end": 174
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 176,
                                                "end": 178
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 172,
                                            "end": 178
                                        },
                                        "flags": 165,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 178
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 165,
                                "end": 178
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 157,
                            "end": 179
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a4",
                                            "rawText": "r1a4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 187,
                                            "end": 192
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 194,
                                                "end": 196
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 198,
                                                "end": 200
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 194,
                                            "end": 200
                                        },
                                        "flags": 187,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 200
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 200
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 179,
                            "end": 201
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a5",
                                            "rawText": "r1a5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 209,
                                            "end": 214
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 216,
                                                "end": 218
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 221,
                                                "end": 223
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 216,
                                            "end": 223
                                        },
                                        "flags": 209,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 223
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 223
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 201,
                            "end": 224
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a6",
                                            "rawText": "r1a6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 232,
                                            "end": 237
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 239,
                                                "end": 241
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 244,
                                                "end": 246
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 239,
                                            "end": 246
                                        },
                                        "flags": 232,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 246
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 232,
                                "end": 246
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 224,
                            "end": 247
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a7",
                                            "rawText": "r1a7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 255,
                                            "end": 260
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 262,
                                                "end": 264
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 268,
                                                "end": 270
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 262,
                                            "end": 270
                                        },
                                        "flags": 255,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 270
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 255,
                                "end": 270
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 247,
                            "end": 271
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a8",
                                            "rawText": "r1a8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 279,
                                            "end": 284
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 286,
                                                "end": 288
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 290,
                                                "end": 292
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 286,
                                            "end": 292
                                        },
                                        "flags": 279,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 292
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 279,
                                "end": 292
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 271,
                            "end": 293
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a9",
                                            "rawText": "r1a9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 301,
                                            "end": 306
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 308,
                                                "end": 310
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 312,
                                                "end": 314
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 308,
                                            "end": 314
                                        },
                                        "flags": 301,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 314
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 301,
                                "end": 314
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 293,
                            "end": 315
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1a10",
                                            "rawText": "r1a10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 323,
                                            "end": 329
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 331,
                                                "end": 333
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 335,
                                                "end": 337
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 331,
                                            "end": 337
                                        },
                                        "flags": 323,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 337
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 323,
                                "end": 337
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 315,
                            "end": 338
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a1",
                                            "rawText": "r2a1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 347,
                                            "end": 352
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 354,
                                                "end": 356
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 358,
                                                "end": 360
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 354,
                                            "end": 360
                                        },
                                        "flags": 347,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 360
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 347,
                                "end": 360
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 338,
                            "end": 361
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a2",
                                            "rawText": "r2a2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 369,
                                            "end": 374
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 376,
                                                "end": 378
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 380,
                                                "end": 382
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 376,
                                            "end": 382
                                        },
                                        "flags": 369,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 382
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 369,
                                "end": 382
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 361,
                            "end": 383
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a3",
                                            "rawText": "r2a3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 391,
                                            "end": 396
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 398,
                                                "end": 400
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 402,
                                                "end": 404
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 398,
                                            "end": 404
                                        },
                                        "flags": 391,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 404
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 391,
                                "end": 404
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 383,
                            "end": 405
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a4",
                                            "rawText": "r2a4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 413,
                                            "end": 418
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 420,
                                                "end": 422
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 424,
                                                "end": 426
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 420,
                                            "end": 426
                                        },
                                        "flags": 413,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 426
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 413,
                                "end": 426
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 405,
                            "end": 427
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a5",
                                            "rawText": "r2a5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 435,
                                            "end": 440
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 442,
                                                "end": 444
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 447,
                                                "end": 449
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 442,
                                            "end": 449
                                        },
                                        "flags": 435,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 449
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 435,
                                "end": 449
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 427,
                            "end": 450
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a6",
                                            "rawText": "r2a6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 458,
                                            "end": 463
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 465,
                                                "end": 467
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 470,
                                                "end": 472
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 465,
                                            "end": 472
                                        },
                                        "flags": 458,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 472
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 458,
                                "end": 472
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 450,
                            "end": 473
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a7",
                                            "rawText": "r2a7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 481,
                                            "end": 486
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 488,
                                                "end": 490
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 494,
                                                "end": 496
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 488,
                                            "end": 496
                                        },
                                        "flags": 481,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 496
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 481,
                                "end": 496
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 473,
                            "end": 497
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a8",
                                            "rawText": "r2a8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 505,
                                            "end": 510
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 512,
                                                "end": 514
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 516,
                                                "end": 518
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 512,
                                            "end": 518
                                        },
                                        "flags": 505,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 518
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 505,
                                "end": 518
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 497,
                            "end": 519
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a9",
                                            "rawText": "r2a9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 527,
                                            "end": 532
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 534,
                                                "end": 536
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 538,
                                                "end": 540
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 534,
                                            "end": 540
                                        },
                                        "flags": 527,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 540
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 527,
                                "end": 540
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 519,
                            "end": 541
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2a10",
                                            "rawText": "r2a10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 549,
                                            "end": 555
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 557,
                                                "end": 559
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 561,
                                                "end": 563
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 557,
                                            "end": 563
                                        },
                                        "flags": 549,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 563
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 549,
                                "end": 563
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 541,
                            "end": 564
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b1",
                                            "rawText": "r1b1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 573,
                                            "end": 578
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 580,
                                                "end": 582
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 584,
                                                "end": 586
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 580,
                                            "end": 586
                                        },
                                        "flags": 573,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 586
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 573,
                                "end": 586
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 564,
                            "end": 587
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b2",
                                            "rawText": "r1b2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 595,
                                            "end": 600
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 602,
                                                "end": 604
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 606,
                                                "end": 608
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 602,
                                            "end": 608
                                        },
                                        "flags": 595,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 608
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 595,
                                "end": 608
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 587,
                            "end": 609
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b3",
                                            "rawText": "r1b3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 617,
                                            "end": 622
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 624,
                                                "end": 626
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 628,
                                                "end": 630
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 624,
                                            "end": 630
                                        },
                                        "flags": 617,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 630
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 617,
                                "end": 630
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 609,
                            "end": 631
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b4",
                                            "rawText": "r1b4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 639,
                                            "end": 644
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 646,
                                                "end": 648
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 650,
                                                "end": 652
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 646,
                                            "end": 652
                                        },
                                        "flags": 639,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 652
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 639,
                                "end": 652
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 631,
                            "end": 653
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b5",
                                            "rawText": "r1b5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 661,
                                            "end": 666
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 668,
                                                "end": 670
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 673,
                                                "end": 675
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 668,
                                            "end": 675
                                        },
                                        "flags": 661,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 675
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 661,
                                "end": 675
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 653,
                            "end": 676
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b6",
                                            "rawText": "r1b6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 684,
                                            "end": 689
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 691,
                                                "end": 693
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 696,
                                                "end": 698
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 691,
                                            "end": 698
                                        },
                                        "flags": 684,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 698
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 684,
                                "end": 698
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 676,
                            "end": 699
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b7",
                                            "rawText": "r1b7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 707,
                                            "end": 712
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 714,
                                                "end": 716
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 720,
                                                "end": 722
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 714,
                                            "end": 722
                                        },
                                        "flags": 707,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 722
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 707,
                                "end": 722
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 699,
                            "end": 723
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b8",
                                            "rawText": "r1b8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 731,
                                            "end": 736
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 738,
                                                "end": 740
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 742,
                                                "end": 744
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 738,
                                            "end": 744
                                        },
                                        "flags": 731,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 744
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 731,
                                "end": 744
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 723,
                            "end": 745
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b9",
                                            "rawText": "r1b9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 753,
                                            "end": 758
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 760,
                                                "end": 762
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 764,
                                                "end": 766
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 760,
                                            "end": 766
                                        },
                                        "flags": 753,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 766
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 753,
                                "end": 766
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 745,
                            "end": 767
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1b10",
                                            "rawText": "r1b10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 775,
                                            "end": 781
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 783,
                                                "end": 785
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 787,
                                                "end": 789
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 783,
                                            "end": 789
                                        },
                                        "flags": 775,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 789
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 775,
                                "end": 789
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 767,
                            "end": 790
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b1",
                                            "rawText": "r2b1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 799,
                                            "end": 804
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 806,
                                                "end": 808
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 810,
                                                "end": 812
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 806,
                                            "end": 812
                                        },
                                        "flags": 799,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 812
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 799,
                                "end": 812
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 790,
                            "end": 813
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b2",
                                            "rawText": "r2b2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 821,
                                            "end": 826
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 828,
                                                "end": 830
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 832,
                                                "end": 834
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 828,
                                            "end": 834
                                        },
                                        "flags": 821,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 834
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 821,
                                "end": 834
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 813,
                            "end": 835
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b3",
                                            "rawText": "r2b3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 843,
                                            "end": 848
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 850,
                                                "end": 852
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 854,
                                                "end": 856
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 850,
                                            "end": 856
                                        },
                                        "flags": 843,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 856
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 843,
                                "end": 856
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 835,
                            "end": 857
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b4",
                                            "rawText": "r2b4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 865,
                                            "end": 870
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 872,
                                                "end": 874
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 876,
                                                "end": 878
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 872,
                                            "end": 878
                                        },
                                        "flags": 865,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 878
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 865,
                                "end": 878
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 857,
                            "end": 879
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b5",
                                            "rawText": "r2b5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 887,
                                            "end": 892
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 894,
                                                "end": 896
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 899,
                                                "end": 901
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 894,
                                            "end": 901
                                        },
                                        "flags": 887,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 901
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 887,
                                "end": 901
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 879,
                            "end": 902
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b6",
                                            "rawText": "r2b6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 910,
                                            "end": 915
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 917,
                                                "end": 919
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 922,
                                                "end": 924
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 917,
                                            "end": 924
                                        },
                                        "flags": 910,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 924
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 910,
                                "end": 924
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 902,
                            "end": 925
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b7",
                                            "rawText": "r2b7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 933,
                                            "end": 938
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 940,
                                                "end": 942
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 946,
                                                "end": 948
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 940,
                                            "end": 948
                                        },
                                        "flags": 933,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 948
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 933,
                                "end": 948
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 925,
                            "end": 949
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b8",
                                            "rawText": "r2b8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 957,
                                            "end": 962
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 964,
                                                "end": 966
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 968,
                                                "end": 970
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 964,
                                            "end": 970
                                        },
                                        "flags": 957,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 970
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 957,
                                "end": 970
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 949,
                            "end": 971
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b9",
                                            "rawText": "r2b9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 979,
                                            "end": 984
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 986,
                                                "end": 988
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 990,
                                                "end": 992
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 986,
                                            "end": 992
                                        },
                                        "flags": 979,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 992
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 979,
                                "end": 992
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 971,
                            "end": 993
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2b10",
                                            "rawText": "r2b10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1001,
                                            "end": 1007
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1009,
                                                "end": 1011
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1013,
                                                "end": 1015
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1009,
                                            "end": 1015
                                        },
                                        "flags": 1001,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1015
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1001,
                                "end": 1015
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 993,
                            "end": 1016
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c1",
                                            "rawText": "r1c1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1025,
                                            "end": 1030
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1032,
                                                "end": 1034
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1036,
                                                "end": 1038
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1032,
                                            "end": 1038
                                        },
                                        "flags": 1025,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1038
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1025,
                                "end": 1038
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1016,
                            "end": 1039
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c2",
                                            "rawText": "r1c2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1047,
                                            "end": 1052
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1054,
                                                "end": 1056
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1058,
                                                "end": 1060
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1054,
                                            "end": 1060
                                        },
                                        "flags": 1047,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1060
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1047,
                                "end": 1060
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1039,
                            "end": 1061
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c3",
                                            "rawText": "r1c3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1069,
                                            "end": 1074
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1076,
                                                "end": 1078
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1080,
                                                "end": 1082
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1076,
                                            "end": 1082
                                        },
                                        "flags": 1069,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1082
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1069,
                                "end": 1082
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1061,
                            "end": 1083
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c4",
                                            "rawText": "r1c4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1091,
                                            "end": 1096
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1098,
                                                "end": 1100
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1102,
                                                "end": 1104
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1098,
                                            "end": 1104
                                        },
                                        "flags": 1091,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1104
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1091,
                                "end": 1104
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1083,
                            "end": 1105
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c5",
                                            "rawText": "r1c5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1113,
                                            "end": 1118
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1120,
                                                "end": 1122
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1125,
                                                "end": 1127
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1120,
                                            "end": 1127
                                        },
                                        "flags": 1113,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1127
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1113,
                                "end": 1127
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1105,
                            "end": 1128
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c6",
                                            "rawText": "r1c6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1136,
                                            "end": 1141
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1143,
                                                "end": 1145
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1148,
                                                "end": 1150
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1143,
                                            "end": 1150
                                        },
                                        "flags": 1136,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1150
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1136,
                                "end": 1150
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1128,
                            "end": 1151
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c7",
                                            "rawText": "r1c7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1159,
                                            "end": 1164
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1166,
                                                "end": 1168
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1172,
                                                "end": 1174
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1166,
                                            "end": 1174
                                        },
                                        "flags": 1159,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1174
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1159,
                                "end": 1174
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1151,
                            "end": 1175
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c8",
                                            "rawText": "r1c8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1183,
                                            "end": 1188
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1190,
                                                "end": 1192
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1194,
                                                "end": 1196
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1190,
                                            "end": 1196
                                        },
                                        "flags": 1183,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1196
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1183,
                                "end": 1196
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1175,
                            "end": 1197
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c9",
                                            "rawText": "r1c9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1205,
                                            "end": 1210
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1212,
                                                "end": 1214
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1216,
                                                "end": 1218
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1212,
                                            "end": 1218
                                        },
                                        "flags": 1205,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1218
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1205,
                                "end": 1218
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1197,
                            "end": 1219
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1c10",
                                            "rawText": "r1c10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1227,
                                            "end": 1233
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1235,
                                                "end": 1237
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1239,
                                                "end": 1241
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1235,
                                            "end": 1241
                                        },
                                        "flags": 1227,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1241
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1227,
                                "end": 1241
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1219,
                            "end": 1242
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c1",
                                            "rawText": "r2c1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1251,
                                            "end": 1256
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1258,
                                                "end": 1260
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1262,
                                                "end": 1264
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1258,
                                            "end": 1264
                                        },
                                        "flags": 1251,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1264
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1251,
                                "end": 1264
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1242,
                            "end": 1265
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c2",
                                            "rawText": "r2c2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1273,
                                            "end": 1278
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1280,
                                                "end": 1282
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1284,
                                                "end": 1286
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1280,
                                            "end": 1286
                                        },
                                        "flags": 1273,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1286
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1273,
                                "end": 1286
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1265,
                            "end": 1287
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c3",
                                            "rawText": "r2c3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1295,
                                            "end": 1300
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1302,
                                                "end": 1304
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1306,
                                                "end": 1308
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1302,
                                            "end": 1308
                                        },
                                        "flags": 1295,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1308
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1295,
                                "end": 1308
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1287,
                            "end": 1309
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c4",
                                            "rawText": "r2c4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1317,
                                            "end": 1322
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1324,
                                                "end": 1326
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1328,
                                                "end": 1330
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1324,
                                            "end": 1330
                                        },
                                        "flags": 1317,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1330
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1317,
                                "end": 1330
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1309,
                            "end": 1331
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c5",
                                            "rawText": "r2c5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1339,
                                            "end": 1344
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1346,
                                                "end": 1348
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1351,
                                                "end": 1353
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1346,
                                            "end": 1353
                                        },
                                        "flags": 1339,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1353
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1339,
                                "end": 1353
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1331,
                            "end": 1354
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c6",
                                            "rawText": "r2c6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1362,
                                            "end": 1367
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1369,
                                                "end": 1371
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1374,
                                                "end": 1376
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1369,
                                            "end": 1376
                                        },
                                        "flags": 1362,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1376
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1362,
                                "end": 1376
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1354,
                            "end": 1377
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c7",
                                            "rawText": "r2c7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1385,
                                            "end": 1390
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1392,
                                                "end": 1394
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1398,
                                                "end": 1400
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1392,
                                            "end": 1400
                                        },
                                        "flags": 1385,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1400
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1385,
                                "end": 1400
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1377,
                            "end": 1401
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c8",
                                            "rawText": "r2c8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1409,
                                            "end": 1414
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1416,
                                                "end": 1418
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1420,
                                                "end": 1422
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1416,
                                            "end": 1422
                                        },
                                        "flags": 1409,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1422
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1409,
                                "end": 1422
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1401,
                            "end": 1423
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c9",
                                            "rawText": "r2c9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1431,
                                            "end": 1436
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1438,
                                                "end": 1440
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1442,
                                                "end": 1444
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1438,
                                            "end": 1444
                                        },
                                        "flags": 1431,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1444
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1431,
                                "end": 1444
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1423,
                            "end": 1445
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2c10",
                                            "rawText": "r2c10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1453,
                                            "end": 1459
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1461,
                                                "end": 1463
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1465,
                                                "end": 1467
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1461,
                                            "end": 1467
                                        },
                                        "flags": 1453,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1467
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1453,
                                "end": 1467
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1445,
                            "end": 1468
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d1",
                                            "rawText": "r1d1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1477,
                                            "end": 1482
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1484,
                                                "end": 1486
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1488,
                                                "end": 1490
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1484,
                                            "end": 1490
                                        },
                                        "flags": 1477,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1490
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1477,
                                "end": 1490
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1468,
                            "end": 1491
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d2",
                                            "rawText": "r1d2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1499,
                                            "end": 1504
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1506,
                                                "end": 1508
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1510,
                                                "end": 1512
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1506,
                                            "end": 1512
                                        },
                                        "flags": 1499,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1512
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1499,
                                "end": 1512
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1491,
                            "end": 1513
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d3",
                                            "rawText": "r1d3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1521,
                                            "end": 1526
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1528,
                                                "end": 1530
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1532,
                                                "end": 1534
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1528,
                                            "end": 1534
                                        },
                                        "flags": 1521,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1534
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1521,
                                "end": 1534
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1513,
                            "end": 1535
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d4",
                                            "rawText": "r1d4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1543,
                                            "end": 1548
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1550,
                                                "end": 1552
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1554,
                                                "end": 1556
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1550,
                                            "end": 1556
                                        },
                                        "flags": 1543,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1556
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1543,
                                "end": 1556
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1535,
                            "end": 1557
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d5",
                                            "rawText": "r1d5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1565,
                                            "end": 1570
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1572,
                                                "end": 1574
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1577,
                                                "end": 1579
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1572,
                                            "end": 1579
                                        },
                                        "flags": 1565,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1579
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1565,
                                "end": 1579
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1557,
                            "end": 1580
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d6",
                                            "rawText": "r1d6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1588,
                                            "end": 1593
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1595,
                                                "end": 1597
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1600,
                                                "end": 1602
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1595,
                                            "end": 1602
                                        },
                                        "flags": 1588,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1602
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1588,
                                "end": 1602
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1580,
                            "end": 1603
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d7",
                                            "rawText": "r1d7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1611,
                                            "end": 1616
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1618,
                                                "end": 1620
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1624,
                                                "end": 1626
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1618,
                                            "end": 1626
                                        },
                                        "flags": 1611,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1626
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1611,
                                "end": 1626
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1603,
                            "end": 1627
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d8",
                                            "rawText": "r1d8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1635,
                                            "end": 1640
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1642,
                                                "end": 1644
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1646,
                                                "end": 1648
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1642,
                                            "end": 1648
                                        },
                                        "flags": 1635,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1648
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1635,
                                "end": 1648
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1627,
                            "end": 1649
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d9",
                                            "rawText": "r1d9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1657,
                                            "end": 1662
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1664,
                                                "end": 1666
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1668,
                                                "end": 1670
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1664,
                                            "end": 1670
                                        },
                                        "flags": 1657,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1670
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1657,
                                "end": 1670
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1649,
                            "end": 1671
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1d10",
                                            "rawText": "r1d10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1679,
                                            "end": 1685
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1687,
                                                "end": 1689
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1691,
                                                "end": 1693
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1687,
                                            "end": 1693
                                        },
                                        "flags": 1679,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1693
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1679,
                                "end": 1693
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1671,
                            "end": 1694
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d1",
                                            "rawText": "r2d1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1703,
                                            "end": 1708
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1710,
                                                "end": 1712
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1714,
                                                "end": 1716
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1710,
                                            "end": 1716
                                        },
                                        "flags": 1703,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1716
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1703,
                                "end": 1716
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1694,
                            "end": 1717
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d2",
                                            "rawText": "r2d2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1725,
                                            "end": 1730
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1732,
                                                "end": 1734
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1736,
                                                "end": 1738
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1732,
                                            "end": 1738
                                        },
                                        "flags": 1725,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1738
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1725,
                                "end": 1738
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1717,
                            "end": 1739
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d3",
                                            "rawText": "r2d3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1747,
                                            "end": 1752
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1754,
                                                "end": 1756
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1758,
                                                "end": 1760
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1754,
                                            "end": 1760
                                        },
                                        "flags": 1747,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1760
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1747,
                                "end": 1760
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1739,
                            "end": 1761
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d4",
                                            "rawText": "r2d4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1769,
                                            "end": 1774
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1776,
                                                "end": 1778
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1780,
                                                "end": 1782
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1776,
                                            "end": 1782
                                        },
                                        "flags": 1769,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1782
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1769,
                                "end": 1782
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1761,
                            "end": 1783
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d5",
                                            "rawText": "r2d5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1791,
                                            "end": 1796
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1798,
                                                "end": 1800
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1803,
                                                "end": 1805
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1798,
                                            "end": 1805
                                        },
                                        "flags": 1791,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1805
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1791,
                                "end": 1805
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1783,
                            "end": 1806
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d6",
                                            "rawText": "r2d6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1814,
                                            "end": 1819
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1821,
                                                "end": 1823
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1826,
                                                "end": 1828
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1821,
                                            "end": 1828
                                        },
                                        "flags": 1814,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1828
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1814,
                                "end": 1828
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1806,
                            "end": 1829
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d7",
                                            "rawText": "r2d7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1837,
                                            "end": 1842
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1844,
                                                "end": 1846
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1850,
                                                "end": 1852
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1844,
                                            "end": 1852
                                        },
                                        "flags": 1837,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1852
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1837,
                                "end": 1852
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1829,
                            "end": 1853
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d8",
                                            "rawText": "r2d8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1861,
                                            "end": 1866
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1868,
                                                "end": 1870
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1872,
                                                "end": 1874
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1868,
                                            "end": 1874
                                        },
                                        "flags": 1861,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1874
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1861,
                                "end": 1874
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1853,
                            "end": 1875
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d9",
                                            "rawText": "r2d9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1883,
                                            "end": 1888
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1890,
                                                "end": 1892
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1894,
                                                "end": 1896
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1890,
                                            "end": 1896
                                        },
                                        "flags": 1883,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1896
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1883,
                                "end": 1896
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1875,
                            "end": 1897
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2d10",
                                            "rawText": "r2d10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1905,
                                            "end": 1911
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1913,
                                                "end": 1915
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1917,
                                                "end": 1919
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1913,
                                            "end": 1919
                                        },
                                        "flags": 1905,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1919
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1905,
                                "end": 1919
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1897,
                            "end": 1920
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e1",
                                            "rawText": "r1e1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1929,
                                            "end": 1934
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1936,
                                                "end": 1938
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1940,
                                                "end": 1942
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1936,
                                            "end": 1942
                                        },
                                        "flags": 1929,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1942
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1929,
                                "end": 1942
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1920,
                            "end": 1943
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e2",
                                            "rawText": "r1e2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1951,
                                            "end": 1956
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1958,
                                                "end": 1960
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1962,
                                                "end": 1964
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1958,
                                            "end": 1964
                                        },
                                        "flags": 1951,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1964
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1951,
                                "end": 1964
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1943,
                            "end": 1965
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e3",
                                            "rawText": "r1e3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1973,
                                            "end": 1978
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1980,
                                                "end": 1982
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1984,
                                                "end": 1986
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1980,
                                            "end": 1986
                                        },
                                        "flags": 1973,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 1986
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1973,
                                "end": 1986
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1965,
                            "end": 1987
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e4",
                                            "rawText": "r1e4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 1995,
                                            "end": 2000
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2002,
                                                "end": 2004
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2006,
                                                "end": 2008
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2002,
                                            "end": 2008
                                        },
                                        "flags": 1995,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2008
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1995,
                                "end": 2008
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1987,
                            "end": 2009
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e5",
                                            "rawText": "r1e5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2017,
                                            "end": 2022
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2024,
                                                "end": 2026
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2029,
                                                "end": 2031
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2024,
                                            "end": 2031
                                        },
                                        "flags": 2017,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2031
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2017,
                                "end": 2031
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2009,
                            "end": 2032
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e6",
                                            "rawText": "r1e6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2040,
                                            "end": 2045
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2047,
                                                "end": 2049
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2052,
                                                "end": 2054
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2047,
                                            "end": 2054
                                        },
                                        "flags": 2040,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2054
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2040,
                                "end": 2054
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2032,
                            "end": 2055
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e7",
                                            "rawText": "r1e7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2063,
                                            "end": 2068
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2070,
                                                "end": 2072
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2076,
                                                "end": 2078
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2070,
                                            "end": 2078
                                        },
                                        "flags": 2063,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2078
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2063,
                                "end": 2078
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2055,
                            "end": 2079
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e8",
                                            "rawText": "r1e8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2087,
                                            "end": 2092
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2094,
                                                "end": 2096
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2098,
                                                "end": 2100
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2094,
                                            "end": 2100
                                        },
                                        "flags": 2087,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2100
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2087,
                                "end": 2100
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2079,
                            "end": 2101
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e9",
                                            "rawText": "r1e9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2109,
                                            "end": 2114
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2116,
                                                "end": 2118
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2120,
                                                "end": 2122
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2116,
                                            "end": 2122
                                        },
                                        "flags": 2109,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2122
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2109,
                                "end": 2122
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2101,
                            "end": 2123
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1e10",
                                            "rawText": "r1e10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2131,
                                            "end": 2137
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2139,
                                                "end": 2141
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2143,
                                                "end": 2145
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2139,
                                            "end": 2145
                                        },
                                        "flags": 2131,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2145
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2131,
                                "end": 2145
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2123,
                            "end": 2146
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e1",
                                            "rawText": "r2e1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2155,
                                            "end": 2160
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2162,
                                                "end": 2164
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2166,
                                                "end": 2168
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2162,
                                            "end": 2168
                                        },
                                        "flags": 2155,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2168
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2155,
                                "end": 2168
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2146,
                            "end": 2169
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e2",
                                            "rawText": "r2e2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2177,
                                            "end": 2182
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2184,
                                                "end": 2186
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2188,
                                                "end": 2190
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2184,
                                            "end": 2190
                                        },
                                        "flags": 2177,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2190
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2177,
                                "end": 2190
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2169,
                            "end": 2191
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e3",
                                            "rawText": "r2e3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2199,
                                            "end": 2204
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2206,
                                                "end": 2208
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2210,
                                                "end": 2212
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2206,
                                            "end": 2212
                                        },
                                        "flags": 2199,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2212
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2199,
                                "end": 2212
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2191,
                            "end": 2213
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e4",
                                            "rawText": "r2e4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2221,
                                            "end": 2226
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2228,
                                                "end": 2230
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2232,
                                                "end": 2234
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2228,
                                            "end": 2234
                                        },
                                        "flags": 2221,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2234
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2221,
                                "end": 2234
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2213,
                            "end": 2235
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e5",
                                            "rawText": "r2e5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2243,
                                            "end": 2248
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2250,
                                                "end": 2252
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2255,
                                                "end": 2257
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2250,
                                            "end": 2257
                                        },
                                        "flags": 2243,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2257
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2243,
                                "end": 2257
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2235,
                            "end": 2258
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e6",
                                            "rawText": "r2e6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2266,
                                            "end": 2271
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2273,
                                                "end": 2275
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2278,
                                                "end": 2280
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2273,
                                            "end": 2280
                                        },
                                        "flags": 2266,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2280
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2266,
                                "end": 2280
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2258,
                            "end": 2281
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e7",
                                            "rawText": "r2e7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2289,
                                            "end": 2294
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2296,
                                                "end": 2298
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2302,
                                                "end": 2304
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2296,
                                            "end": 2304
                                        },
                                        "flags": 2289,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2304
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2289,
                                "end": 2304
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2281,
                            "end": 2305
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e8",
                                            "rawText": "r2e8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2313,
                                            "end": 2318
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2320,
                                                "end": 2322
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2324,
                                                "end": 2326
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2320,
                                            "end": 2326
                                        },
                                        "flags": 2313,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2326
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2313,
                                "end": 2326
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2305,
                            "end": 2327
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e9",
                                            "rawText": "r2e9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2335,
                                            "end": 2340
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2342,
                                                "end": 2344
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2346,
                                                "end": 2348
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2342,
                                            "end": 2348
                                        },
                                        "flags": 2335,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2348
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2335,
                                "end": 2348
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2327,
                            "end": 2349
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r2e10",
                                            "rawText": "r2e10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2357,
                                            "end": 2363
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2365,
                                                "end": 2367
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2369,
                                                "end": 2371
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2365,
                                            "end": 2371
                                        },
                                        "flags": 2357,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2371
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2357,
                                "end": 2371
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2349,
                            "end": 2372
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f1",
                                            "rawText": "r1f1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2381,
                                            "end": 2386
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2388,
                                                "end": 2390
                                            },
                                            "operator": "*",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2392,
                                                "end": 2394
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2388,
                                            "end": 2394
                                        },
                                        "flags": 2381,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2394
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2381,
                                "end": 2394
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2372,
                            "end": 2395
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f2",
                                            "rawText": "r1f2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2403,
                                            "end": 2408
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2410,
                                                "end": 2412
                                            },
                                            "operator": "/",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2414,
                                                "end": 2416
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2410,
                                            "end": 2416
                                        },
                                        "flags": 2403,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2416
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2403,
                                "end": 2416
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2395,
                            "end": 2417
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f3",
                                            "rawText": "r1f3",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2425,
                                            "end": 2430
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2432,
                                                "end": 2434
                                            },
                                            "operator": "%",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2436,
                                                "end": 2438
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2432,
                                            "end": 2438
                                        },
                                        "flags": 2425,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2438
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2425,
                                "end": 2438
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2417,
                            "end": 2439
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f4",
                                            "rawText": "r1f4",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2447,
                                            "end": 2452
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2454,
                                                "end": 2456
                                            },
                                            "operator": "-",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2458,
                                                "end": 2460
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2454,
                                            "end": 2460
                                        },
                                        "flags": 2447,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2460
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2447,
                                "end": 2460
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2439,
                            "end": 2461
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f5",
                                            "rawText": "r1f5",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2469,
                                            "end": 2474
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2476,
                                                "end": 2478
                                            },
                                            "operator": "<<",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2481,
                                                "end": 2483
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2476,
                                            "end": 2483
                                        },
                                        "flags": 2469,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2483
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2469,
                                "end": 2483
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2461,
                            "end": 2484
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f6",
                                            "rawText": "r1f6",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2492,
                                            "end": 2497
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2499,
                                                "end": 2501
                                            },
                                            "operator": ">>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2504,
                                                "end": 2506
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2499,
                                            "end": 2506
                                        },
                                        "flags": 2492,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2506
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2492,
                                "end": 2506
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2484,
                            "end": 2507
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f7",
                                            "rawText": "r1f7",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2515,
                                            "end": 2520
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2522,
                                                "end": 2524
                                            },
                                            "operator": ">>>",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2528,
                                                "end": 2530
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2522,
                                            "end": 2530
                                        },
                                        "flags": 2515,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2530
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2515,
                                "end": 2530
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2507,
                            "end": 2531
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f8",
                                            "rawText": "r1f8",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2539,
                                            "end": 2544
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2546,
                                                "end": 2548
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2550,
                                                "end": 2552
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2546,
                                            "end": 2552
                                        },
                                        "flags": 2539,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2552
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2539,
                                "end": 2552
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2531,
                            "end": 2553
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f9",
                                            "rawText": "r1f9",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2561,
                                            "end": 2566
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2568,
                                                "end": 2570
                                            },
                                            "operator": "^",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2572,
                                                "end": 2574
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2568,
                                            "end": 2574
                                        },
                                        "flags": 2561,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2574
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2561,
                                "end": 2574
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2553,
                            "end": 2575
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [
                                    {
                                        "kind": 16627,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "r1f10",
                                            "rawText": "r1f10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 2583,
                                            "end": 2589
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2591,
                                                "end": 2593
                                            },
                                            "operator": "|",
                                            "right": {
                                                "kind": 196712,
                                                "text": "t",
                                                "rawText": "t",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2595,
                                                "end": 2597
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2591,
                                            "end": 2597
                                        },
                                        "flags": 2583,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 0,
                                        "end": 2597
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 2583,
                                "end": 2597
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2575,
                            "end": 2598
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 2598
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 2600
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 14
                        },
                        "constraint": null,
                        "defaultType": null,
                        "expression": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 13,
                        "end": 14
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 13,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 2600
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 2600
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

